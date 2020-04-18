import React, { useState } from 'react';

import styled from 'styled-components';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const UploadImageStyled = styled.div``;

const UploadImage = () => {
    const [img, setImg] = useState({ path: '' });

    const handleImageDrop = e => {
        setImg(e[0]);
        debugger
    }

    const getUploadParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' };
    }

    const handleChangeStatus = ({ meta, file }, status) => {
        console.log(status, meta, file)
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <UploadImageStyled>
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*"
            />

        </UploadImageStyled>
    )
}


export default UploadImage;