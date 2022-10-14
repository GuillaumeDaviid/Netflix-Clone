import React, {} from 'react';
import Video from "../components/Video";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

describe('Video', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Video />
            </Router>
        )
    })

    test('Should have a video block', async () => {
        render(
            <Router>
            <Video />
            </Router>
        )

        const videoBlock = screen.getByTestId("block-video")
        expect(videoBlock).toBeTruthy();
    })
})