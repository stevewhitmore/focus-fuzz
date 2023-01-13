import styled from "styled-components";
import { SoundFileModel } from '../models/sound-file.model';


const SoundFile = ( soundFile: SoundFileModel ) => {
    const htmlId = soundFile.name.replaceAll(' ', '-').toLowerCase();

    return (
        <SoundControl id={htmlId}>
            <span className="material-symbols-outlined">
            { soundFile.icon }
            </span>
            <SoundLabel>{soundFile.name}</SoundLabel>
            <input type="range"></input>
        </SoundControl>
    );
}

export default SoundFile;

const SoundControl = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
`;

const SoundLabel = styled.span`
    padding: 0.5rem 0;
`;