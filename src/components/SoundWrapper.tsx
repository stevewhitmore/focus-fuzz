import { useEffect, useState } from 'react';
import styled from "styled-components";
import { SoundFileModel } from '../models/sound-file.model';
import SoundFile from './SoundFile';

const SoundWrapper = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [sounds, setSounds] = useState<SoundFileModel[]>([]);

    useEffect(() => {
        setIsFetching(true);
        // faking the api call for now...
        fetch('./sound-list.json')
            .then((response) => response.json())
            .then((responseJson) => {
                setSounds(responseJson);
                setIsFetching(false);
            })
            .catch((e) => {
                console.error(e);
                setIsFetching(false);
            });
    }, []);

    const soundFileList = sounds.map((sound) => (
        <SoundFile 
            key={sound.id}
            id={sound.id}
            name={sound.name}
            icon={sound.icon}
            source={sound.source} 
        />
    ));

    return (
        <div>
            <PlayButton>
            <PlayIcon className="material-symbols-outlined">
                play_arrow
            </PlayIcon>
            </PlayButton>
            <SoundContainer>
                { isFetching ? <h2>Loading...</h2> : soundFileList }
            </SoundContainer>
        </div>
    );
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
    grid-template-columns: 200px 200px 200px 200px;
    justify-items: center;
    column-gap: 5rem;
    row-gap: 5rem;
    justify-content: center;
    @media (max-width: 1020px) {
        grid-template-columns: 200px 200px;
    }
    @media (max-width: 480px) {
        grid-template-columns: 200px;
    }
`;
