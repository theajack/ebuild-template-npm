import {testStrictEqualCase} from 'testUtils';

const testCases = [
    {
        name: '测试',
        test () {
            return [
                'test'
            ];
        },
        expect: [
            'test'
        ]
    }
];

testStrictEqualCase({testCases});