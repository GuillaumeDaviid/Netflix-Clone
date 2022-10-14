import React, {} from 'react';
import Banner from "../components/Banner";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

describe('Banner', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Banner />
            </Router>
        )
    })

    test('Should have a player button', async () => {
        render(
            <Router>
            <Banner />
            </Router>
        )

        const btnPlay = screen.getByTestId('btn-play');
        expect(btnPlay).toBeTruthy();
    })

    test('Should have a more informations button', async () => {
        render(
            <Router>
            <Banner />
            </Router>
        )

        const btnMore = screen.getByTestId('btn-more');
        expect(btnMore).toBeTruthy();
    })

    test('Should have a movie name', async () => {
        render(
            <Router>
            <Banner />
            </Router>
        )

        const movieName = screen.getByTestId('movie-name');
        expect(movieName).toBeTruthy();
    })

    test('Should have a movie description', async () => {
        render(
            <Router>
            <Banner />
            </Router>
        )

        const movieDescription = screen.getByTestId('movie-description');
        expect(movieDescription).toBeTruthy();
    })
})