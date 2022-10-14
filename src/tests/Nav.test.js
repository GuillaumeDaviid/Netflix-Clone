import React, {} from 'react';
import Nav from "../components/Nav";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

describe('Nav', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Nav />
            </Router>
        )
    })

    test('Should have search button', async () => {
        render(
            <Router>
            <Nav />
            </Router>
        )

        const search = screen.getByTestId("search");
        expect(search).toBeTruthy();
    })

    test('Should have youth button', async () => {
        render(
            <Router>
            <Nav />
            </Router>
        )

        const youthBtn = screen.getByTestId("youth-btn");
        expect(youthBtn).toBeTruthy();
    })

    test('Should have direct button', async () => {
        render(
            <Router>
            <Nav />
            </Router>
        )

        const directBtn = screen.getByTestId("direct-btn");
        expect(directBtn).toBeTruthy();
    })

    test('Should have 5 nav button', async () => {
        render(
            <Router>
            <Nav />
            </Router>
        )

        const navLink = screen.getAllByTestId("nav-link");
        expect(navLink).toHaveLength(5);
    })
})