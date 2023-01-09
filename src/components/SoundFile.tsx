import styled from "styled-components";
import { SoundFileModel } from '../models/sound-file.model';


const SoundFile = ( soundFile: SoundFileModel ) => {
    return (
        <SoundControl id={soundFile.name}>
            <span className="material-symbols-outlined">
            { soundFile.icon }
            </span>
            <label>{soundFile.name}</label>
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