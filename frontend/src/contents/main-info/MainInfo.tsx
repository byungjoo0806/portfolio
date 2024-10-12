import React from 'react';
import Tabs from '../../components/Tabs';
import TabPane from '../../components/TabPane';
import Projects from './Projects';
import TechStack from './TechStack';
import Education from './Education';
import AdditionalDetails from './AdditionalDetails';

interface Tab {
    key: string;
    label: string;
}

type Props = {}

const MainInfo: React.FC = (props: Props) => {
    const tabs: Tab[] = [
        { key: 'tab1', label: 'About' },
        { key: 'tab2', label: 'Projects' },
        { key: 'tab3', label: 'Tech Stack' },
        { key: 'tab4', label: 'Education' },
      ];
    
      return (
        <Tabs tabs={tabs}>
          <TabPane tabKey="tab1">
            <AdditionalDetails />
          </TabPane>
          <TabPane tabKey="tab2">
            <Projects />
          </TabPane>
          <TabPane tabKey="tab3">
            <TechStack />
          </TabPane>
          <TabPane tabKey="tab4">
            <Education />
          </TabPane>
        </Tabs>
      );
}

export default MainInfo;