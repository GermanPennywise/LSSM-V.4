import config from '../../src/config';

import { Issue } from './types/issues';

declare module 'vue/types/vue' {
    type MomentShort =
        | 'LT'
        | 'LTS'
        | 'L'
        | 'l'
        | 'LL'
        | 'll'
        | 'LLL'
        | 'lll'
        | 'LLLL'
        | 'llll';

    type MomentVariableCategories =
        | 'month'
        | 'quarter'
        | 'dom'
        | 'doy'
        | 'dow'
        | 'week'
        | 'year'
        | 'ampm'
        | 'hour'
        | 'minute'
        | 'second';

    interface Vue {
        $lang: string;
        $themeConfig: {
            variables: {
                discord: string;
                github: string;
                server: string;
                versions: {
                    beta: string;
                    stable: string;
                    short: string;
                };
                browsers: typeof config.browser;
                noMapkitModules: Record<string, { title: string; f: string }[]>;
                bugIssues: Issue[];
                moment: Record<
                    string,
                    {
                        titles: {
                            shorts: Record<
                                'variable' | 'description' | 'example',
                                string
                            >;
                            variables: Record<
                                | 'category'
                                | 'variable'
                                | 'output'
                                | 'description'
                                | MomentVariableCategories,
                                string
                            >;
                        };
                        shorts: Record<MomentShort, string>;
                        variables: Record<
                            MomentVariableCategories,
                            Record<string, string>
                        > & { order: MomentVariableCategories[] };
                    }
                >;
            };
        };
    }
}
