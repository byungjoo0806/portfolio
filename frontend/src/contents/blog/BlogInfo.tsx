import React from 'react';
import Tabs from '../../components/Tabs';
import TabPane from '../../components/TabPane';
import CodeOfTheDay from './CodeOfTheDay';
import AddPost from './AddPost';

interface Tab {
    key: string;
    label: string;
}

type Props = {}

const BlogInfo = (props: Props) => {
    const tabs: Tab[] = [
        { key: 'tab1', label: 'COTD' },
        { key: 'tab2', label: 'New' },
    ];

    return (
        <Tabs tabs={tabs}>
            <TabPane tabKey="tab1">
                <CodeOfTheDay />
            </TabPane>
            <TabPane tabKey="tab2">
                <AddPost />
            </TabPane>
        </Tabs>
    )
}

export default BlogInfo;