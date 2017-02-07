import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import {
  Window,
  WindowContent,
  WindowRow,
  WindowColumn,
  WindowColumnGroup,
  ToolbarHeader,
  ToolbarContainer,
  ToolbarContainerGroup
} from '../components/';

/*storiesOf('Welcome', module)
 .add('to Clarito', () => (
 <Welcome showApp={linkTo('Button')}/>
 ));*/

/*storiesOf('Button', module)
 .add('with text', () => (
 <Button onClick={action('clicked')}>Hello Button</Button>
 ))
 .add('with some emoji', () => (
 <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
 ));*/

/**
 * Window
 */
storiesOf('Window', module)

  .add('default', () => (
    <Window>Window</Window>
  ));

/**
 * WindowContent
 */
storiesOf('WindowContent', module)

  .add('default', () => (
    <Window>
      <WindowContent>WindowContent</WindowContent>
    </Window>
  ))

  .add('transparent', () => (
    <Window>
      <WindowContent transparent={true}>WindowContent</WindowContent>
    </Window>
  ))

  .add('gray', () => (
    <Window>
      <WindowContent transparent={false} gray={true}>WindowContent</WindowContent>
    </Window>
  ))

  .add('spaced', () => (
    <Window>
      <WindowContent spaced>WindowContent</WindowContent>
    </Window>
  ))

  .add('spaced gray', () => (
    <Window>
      <WindowContent spaced gray>WindowContent</WindowContent>
    </Window>
  ));


/**
 * ToolbarHeader
 */
storiesOf('ToolbarHeader', module)

  .add('default', () => (
    <Window>
      <ToolbarHeader/>
    </Window>
  ))

  .add('title', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
    </Window>
  ))

  .add('title + inset', () => (
    <Window>
      <ToolbarHeader title="Clarito" inset/>
    </Window>
  ));

/**
 * ToolbarContainer
 */
storiesOf('ToolbarContainer', module)

  .add('default', () => (
    <Window>
      <ToolbarHeader>
        <ToolbarContainer/>
      </ToolbarHeader>
    </Window>
  ))

  .add('title', () => (
    <Window>
      <ToolbarHeader title="ToolbarHeader with ToolbarContainer nested">
        <ToolbarContainer/>
      </ToolbarHeader>
    </Window>
  ));

/**
 * ToolbarContainerGroup
 */
storiesOf('ToolbarContainerGroup', module)

  .add('default', () => (
    <Window>
      <ToolbarHeader>
        <ToolbarContainer>
          <ToolbarContainerGroup>
            <button className="btn btn-default">Button</button>
          </ToolbarContainerGroup>
        </ToolbarContainer>
      </ToolbarHeader>
    </Window>
  ))

  .add('with title', () => (
    <Window>
      <ToolbarHeader title="Clarito">
        <ToolbarContainer>
          <ToolbarContainerGroup>
            <button className="btn btn-default">Button</button>
          </ToolbarContainerGroup>
        </ToolbarContainer>
      </ToolbarHeader>
    </Window>
  ))

  .add('with multiple buttons', () => (
    <Window>
      <ToolbarHeader title="Clarito">
        <ToolbarContainer>
          <ToolbarContainerGroup>
            <button className="btn btn-default">Calendars</button>
            <button className="btn btn-default pull-right">↹</button>
          </ToolbarContainerGroup>

          <div style={{width: '54px', display: 'inline-block'}}></div>

          <ToolbarContainerGroup>
            <button className="btn btn-default">Day</button>
            <button className="btn btn-default">Week</button>
            <button className="btn btn-default active">Month</button>
            <button className="btn btn-default">Year</button>
          </ToolbarContainerGroup>
        </ToolbarContainer>
      </ToolbarHeader>
    </Window>
  ))

  .add('with multiple buttons. no title', () => (
    <Window>
      <ToolbarHeader>
        <ToolbarContainer>
          <ToolbarContainerGroup>
            <button className="btn btn-default">Calendars</button>
            <button className="btn btn-default pull-right">↹</button>
          </ToolbarContainerGroup>

          <div style={{width: '54px', display: 'inline-block'}}></div>

          <ToolbarContainerGroup>
            <button className="btn btn-default">Day</button>
            <button className="btn btn-default">Week</button>
            <button className="btn btn-default active">Month</button>
            <button className="btn btn-default">Year</button>
          </ToolbarContainerGroup>
        </ToolbarContainer>
      </ToolbarHeader>
    </Window>
  ));

/**
 * WindowColumnGroup
 */
storiesOf('WindowColumnGroup', module)

  .add('default', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
      <WindowContent>
        <WindowColumnGroup></WindowColumnGroup>
      </WindowContent>
    </Window>
  ))

  .add('1 WindowColumn', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
      <WindowContent>
        <WindowColumnGroup>
          <WindowColumn>Column 1</WindowColumn>
        </WindowColumnGroup>
      </WindowContent>
    </Window>
  ))

  .add('2 WindowColumn', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
      <WindowContent>
        <WindowColumnGroup>
          <WindowColumn>Column 1</WindowColumn>
          <WindowColumn>Column 2</WindowColumn>
        </WindowColumnGroup>
      </WindowContent>
    </Window>
  ))

  .add('5 WindowColumn', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
      <WindowContent>
        <WindowColumnGroup>
          <WindowColumn>Column 1</WindowColumn>
          <WindowColumn>Column 2</WindowColumn>
          <WindowColumn>Column 3</WindowColumn>
          <WindowColumn>Column 4</WindowColumn>
          <WindowColumn>Column 5</WindowColumn>
        </WindowColumnGroup>
      </WindowContent>
    </Window>
  ))

  .add('5 WindowColumn + gray bg', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
      <WindowContent gray>
        <WindowColumnGroup>
          <WindowColumn>Column 1</WindowColumn>
          <WindowColumn>Column 2</WindowColumn>
          <WindowColumn>Column 3</WindowColumn>
          <WindowColumn>Column 4</WindowColumn>
          <WindowColumn>Column 5</WindowColumn>
        </WindowColumnGroup>
      </WindowContent>
    </Window>
  ));

/**
 * WindowRow
 */
storiesOf('WindowColumn > WindowRow', module)

  .add('default', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
      <WindowContent>
        <WindowColumnGroup>
          <WindowColumn>
            <WindowRow>Row 1</WindowRow>
          </WindowColumn>
        </WindowColumnGroup>
      </WindowContent>
    </Window>
  ))

  .add('2 WindowRow', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
      <WindowContent>
        <WindowColumnGroup>
          <WindowColumn>
            <WindowRow>Row 1</WindowRow>
            <WindowRow>Row 2</WindowRow>
          </WindowColumn>
        </WindowColumnGroup>
      </WindowContent>
    </Window>
  ))

  .add('Multiple Nesting', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
      <WindowContent>
        <WindowColumnGroup>
          <WindowColumn>
            <WindowRow>C:1 - R:1</WindowRow>
            <WindowRow>C:1 - R:2</WindowRow>
            <WindowRow>C:1 - R:3</WindowRow>
          </WindowColumn>

          <WindowColumn>
            <WindowRow>C:2 - R:1</WindowRow>
            <WindowRow>
              <WindowColumn>C:2 - R:2</WindowColumn>
              <WindowColumn>
                <WindowRow>C:2 - R:2 -- R:First</WindowRow>
                <WindowRow>
                  <WindowColumn>A</WindowColumn>
                  <WindowColumn>B</WindowColumn>
                  <WindowColumn>C</WindowColumn>
                  <WindowColumn>D</WindowColumn>
                  <WindowColumn>E</WindowColumn>
                </WindowRow>
                <WindowRow>C:2 - R:2 -- R:Last</WindowRow>
              </WindowColumn>
            </WindowRow>
          </WindowColumn>
        </WindowColumnGroup>
      </WindowContent>
    </Window>
  ))

  .add('Multiple Nesting Gray', () => (
    <Window>
      <ToolbarHeader title="Clarito"/>
      <WindowContent gray>
        <WindowColumnGroup>
          <WindowColumn>
            <WindowRow/>
            <WindowRow/>
            <WindowRow/>
          </WindowColumn>

          <WindowColumn>
            <WindowRow/>
            <WindowRow>
              <WindowColumn/>
              <WindowColumn>
                <WindowRow/>
                <WindowRow>
                  <WindowColumn/>
                  <WindowColumn/>
                  <WindowColumn/>
                  <WindowColumn/>
                  <WindowColumn/>
                </WindowRow>
                <WindowRow/>
              </WindowColumn>
            </WindowRow>
          </WindowColumn>
        </WindowColumnGroup>
      </WindowContent>
    </Window>
  ));
