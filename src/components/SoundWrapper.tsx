import React from 'react';
import styled from "styled-components";
import { SoundFileModel } from '../models/sound-file.model';
import SoundFile from './SoundFile';

type SoundWrapperProps = {};
type SoundWrapperState = {
    isFetching: boolean,
    sounds: SoundFileModel[],
};


class SoundWrapper extends React.Component<SoundWrapperProps, SoundWrapperState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isFetching: false,
            sounds: []
        };
    }

    componentDidMount() {
        this.getSoundData();
    }

    getSoundData () {
        this.setState({...this.state, isFetching: true});

        // faking the api call for now...
        fetch('./sound-list.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    ...this.state,
                    sounds: responseJson,
                    isFetching: false,
                })
            })
            .catch((e) => {
                console.error(e);
                this.setState({...this.state, isFetching: false});
            });
     }

    render() {
        return (
            <div>
                <PlayButton>
                    <PlayIcon className="material-symbols-outlined">
                        play_arrow
                    </PlayIcon>
                </PlayButton>
                <SoundContainer>
                    {
                        this.state.sounds.map(sound => <SoundFile key={sound.id}
                                                                    id={sound.id}
                                                                    name={sound.name}
                                                                    icon={sound.icon}
                                                                    source={sound.source}></SoundFile>)
                    }
                </SoundContainer>
            </div>
        );
    }
}

export default SoundWrapper;

const PlayButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
`;

const PlayIcon = styled.span`
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
    font-size: 10rem;
`;

const SoundContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px;
    justify-items: center;
    column-gap: 5rem;
    row-gap: 5rem;
    justify-content: center;
`;
