import React, {} from 'react';
import QuickView from "../components/QuickView";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

describe('QuickView', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <QuickView />
            </Router>
        )
    })

    test('Should have', async () => {
        render(
            <Router>
            <QuickView />
            </Router>
        )

        const movieName = screen.getByTestId("quick-movie-name");
        expect(movieName).toBeTruthy();
    })
})