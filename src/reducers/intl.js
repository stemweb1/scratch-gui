import {intlReducer} from 'react-intl-redux';

const intlInitialState = {
    intl: {
        defaultLocale: 'en',
        locale: 'en',
        messages: {
            'gui.costumeTab.addSurpriseCostume': '惊喜',
            'paint.modeTools.flipHorizontal': '水平翻转',
            'paint.modeTools.flipVertical': '垂直翻转',
        }
    }
};

export {
    intlReducer as default,
    intlInitialState
};
