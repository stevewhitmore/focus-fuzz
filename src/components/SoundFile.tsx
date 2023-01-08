import React from 'react';
import styled from "styled-components";
import { SoundFileModel } from '../models/sound-file.model';

type SoundFileProps = SoundFileModel;
type SoundFileState = {}

class SoundFile extends React.Component<SoundFileProps, SoundFileState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <SoundControl id={this.props.name}>
                <span className="material-symbols-outlined">
                { this.props.icon }
                </span>
                <label>{this.props.name}</label>
                <input type="range"></input>
            </SoundControl>
        );
    }
}

export default SoundFile;

const SoundControl = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
`;