import React, {} from 'react';
import Footer from "../components/Footer";
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

describe('Banner', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Footer />
            </Router>
        )
    })
})