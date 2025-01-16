import {useState} from 'react'
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import { CoreConceptNew } from './components/CoreConcept';
import TabButton from './components/TabButton';

export function Todo(props) {
  return <li>{props.text}</li>;
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];
  function handleClick(selectedButton) {
    //tabContent = selectedButton;
    // console.log('Hello world');
    // console.log(selectedButton);
    //console.log(tabContent);
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic!</p>;

  if(selectedTopic) {
    tabContent = <div>
      <ul>
          {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
        </ul>
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

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>))}
          </ul>
          {/* <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConceptNew {...CORE_CONCEPTS[3]}></CoreConceptNew>
          </ul> */}
        </section>
        <section id="examples">
          <h2>Examples!</h2>
          <menu>
          <TabButton onSelect={() => handleClick('components')} isSelected={selectedTopic == 'components'}>Components</TabButton>
          <TabButton onSelect={() => handleClick('jsx')} isSelected={selectedTopic == 'jsx'}>JSX</TabButton>
          <TabButton onSelect={() => handleClick('props')} isSelected={selectedTopic == 'props'}>Props</TabButton>
          <TabButton onSelect={() => handleClick('state')} isSelected={selectedTopic == 'state'}>State</TabButton>
          </menu>
          <div id="tab-content">
            {tabContent}
            {/* {selectedTopic !== undefined ? 
            <div>
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
            </div>
            : <p>
                Please select a topic!
              </p>} */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
