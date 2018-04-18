/* @flow */

import { getKarmaConfig } from 'grumbler-scripts/config/karma.conf';
import { getWebpackConfig } from 'grumbler-scripts/config/webpack.config';

export default (karma : Object) =>
    karma.set(getKarmaConfig(karma, {
        basePath: __dirname,
        webpack:  getWebpackConfig({
            vars: {
                __PAYPAL_BRAINTREE_SERVER_CONFIG__: {
                    'hosted-fields': {
                        clientConfiguration: {
                            assetsUrl: 'https://paypal.com/assets/'
                        }
                    }
                },
                __PAYPAL_BRAINTREE_QUERY_OPTIONS__: {}
            }
        })
    }));
