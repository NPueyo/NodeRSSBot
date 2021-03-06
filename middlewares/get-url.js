module.exports = async (ctx, next) => {
    const { text } = ctx.message;
    const [command, url] = text.split(/\s+/);
    if (!url) {
        switch (command.substr(0, 4)) {
            case '/sub':
                throw new Error('SUB_USAGE');
            case '/uns':
                if (command.substr(0, 8) === '/unsubthis')
                    throw new Error('UNSUBTHIS_USAGE');
                else throw new Error('UNSUB_USAGE');
            case '/exp':
                throw new Error('EXPORT');
            case '/all':
                throw new Error('USB_ALL_USAGE');
            case '/vie':
                throw new Error('VIEW_ALL_USAGE');
        }
    }
    if (!url.startsWith('http') && !url.startsWith('https')) {
        throw new Error('FEED_URL_NOT_PARSE');
    }
    ctx.state.feedUrl = decodeURI(url);
    await next();
};
