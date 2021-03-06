import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { NextIntlScript } from '@moxy/next-intl';

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextIntlScript />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
