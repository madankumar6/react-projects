import {useState} from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    let tabContent = <p>Please select a topic!</p>;

    if(selectedTopic) {
        tabContent = <div>
        <h3>
        {EXAMPLES[selectedTopic].title}
        </h3>
        <p>
        {EXAMPLES[selectedTopic].description}
        </p>
        <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
        </pre>
    </div>;
    }

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
      }

      return (
        <Section id="examples" title="Examples!">
            <Tabs buttonsContainer = "menu" buttons={<>
                <TabButton onSelect={() => handleClick('components')} isSelected={selectedTopic == 'components'}>Components</TabButton>
                <TabButton onSelect={() => handleClick('jsx')} isSelected={selectedTopic == 'jsx'}>JSX</TabButton>
                <TabButton onSelect={() => handleClick('props')} isSelected={selectedTopic == 'props'}>Props</TabButton>
                <TabButton onSelect={() => handleClick('state')} isSelected={selectedTopic == 'state'}>State</TabButton>
                </>}>
                <div id="tab-content">
                    {tabContent}
                </div>
            </Tabs>
          
        </Section>
    );
}