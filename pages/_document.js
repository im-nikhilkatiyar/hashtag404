import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../utility/createEmotionCache';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;
        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collect(<App {...props} />),
            });

            const initialProps = await Document.getInitialProps(ctx);
            const emotionStyles = extractCriticalToChunks(initialProps.html);
            const emotionStyleTags = emotionStyles.styles.map((style) => (
                <style
                    data-emotion={`${ style.key } ${ style.ids.join(' ') }`}
                    key={style.key}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: style.css }}
                />
            ));
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                        {[ ...emotionStyleTags ]}
                    </>
                ),
            };
        } finally {
            ctx.renderPage(sheet);
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
