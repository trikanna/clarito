import React, {Component} from 'react';

var platform = require('platform');

import {
  IoIosFolder,
  IoIosArrowRight,
  IoIosArrowLeft,
  IoAndroidAdd,
  IoIosCloud,
  IoDocument,
  IoAndroidDocument,
  IoDocumentText
} from 'react-icons/lib/io';

import {
  FaArrowCircleDown,
  FaHddO,
  FaTag,FaTags
} from 'react-icons/lib/fa';

//import { MdFolder } from 'react-icons/lib/md';



import './window.css';

import {
  Window,

  WindowContent,
  WindowColumnGroup,
  WindowColumn,

  WindowRow,

  ToolbarHeader,

  ToolbarContainer,
  ToolbarContainerGroup,

  ToolbarHorizontal,
  ToolbarHorizontalItem

} from './components';

class App extends Component {
  render() {

    return (
      <Window>

        <ToolbarHeader color={'gray'} _title="Clarito" inset={true}>

          <ToolbarContainer centered={false}>

            <button className="btn btn-default btn-icon" style={{marginLeft: platform.name === 'Node.js' ? 78 : 8}}><IoIosFolder />Calendars</button>

            <button className="btn btn-default" style={{marginLeft: 40, marginRight: 30}}><IoAndroidAdd /></button>

            <ToolbarContainerGroup>
              <button className="btn btn-default"><IoIosArrowLeft /></button>
              <button className="btn btn-default"><IoIosArrowRight /></button>
            </ToolbarContainerGroup>

            <ToolbarContainerGroup>
              <button className="btn btn-default">Day</button>
              <button className="btn btn-default">Week</button>
              <button className="btn btn-default active">Month</button>
              <button className="btn btn-default">Year</button>
            </ToolbarContainerGroup>


            <ToolbarContainerGroup right={true}>
              <button className="btn btn-default"><IoIosArrowLeft /></button>
              <button className="btn btn-default">2017</button>
              <button className="btn btn-default"><IoIosArrowRight /></button>
            </ToolbarContainerGroup>



          </ToolbarContainer>
        </ToolbarHeader>

        <WindowContent transparent={true} spaced={false} gray={false}>

          <WindowColumnGroup>

            <WindowColumn sidebar={true} grays>
              <ul className="nav-group">
                <h5 className="nav-group-title">Favorites</h5>
                <li className="nav-group-item"><a href="#"><span><IoIosCloud /></span>iCloud Drive</a></li>
                <li className="nav-group-item"><a href="#"><span></span>Desktop</a></li>
                <li className="nav-group-item"><a href="#"><span></span>Applications</a></li>
                <li className="nav-group-item"><a href="#"><span><FaArrowCircleDown /></span>Downloads</a></li>
                <li className="nav-group-item"><a href="#"><span></span>trikanna</a></li>
                <li className="nav-group-item active"><a href="#"><span><IoIosFolder /></span>dev</a></li>

                <li className="nav-group-item"><a href="#"><span><IoDocument /></span>dev</a></li>
                <li className="nav-group-item"><a href="#"><span><IoAndroidDocument /></span>dev</a></li>
                <li className="nav-group-item"><a href="#"><span><IoDocumentText /></span>dev</a></li>

              </ul>

              <ul className="nav-group">
                <h5 className="nav-group-title">Devices</h5>
                <li className="nav-group-item"><a href="#"><span><FaHddO /></span>BACKUP 1TB</a></li>
                <li className="nav-group-item"><a href="#"><span><FaHddO /></span>tm</a></li>
              </ul>

              <ul className="nav-group">
                <h5 className="nav-group-title">Tags</h5>
                <li className="nav-group-item"><a href="#"><span><FaTag style={{color:  'rgb(253,100,97)'}} /></span>Red</a></li>
                <li className="nav-group-item"><a href="#"><span><FaTag style={{color:  'rgb(247,166,80)'}} /></span>Orange</a></li>
                <li className="nav-group-item"><a href="#"><span><FaTag style={{color:  'rgb(244,205,86)'}} /></span>Yellow</a></li>
                <li className="nav-group-item"><a href="#"><span><FaTag style={{color:  'rgb(113,202,88)'}} /></span>Green</a></li>
                <li className="nav-group-item"><a href="#"><span><FaTags style={{color: 'rgb(81,186,242)'}} /></span>Blue</a></li>
                <li className="nav-group-item"><a href="#"><span><FaTags style={{color: 'rgb(208,140,224)'}} /></span>Purple</a></li>
                <li className="nav-group-item"><a href="#"><span><FaTags style={{color: 'rgb(165,165,167)'}} /></span>Gray</a></li>
              </ul>

            </WindowColumn>




            <WindowColumn transparent={false} gray={true} white={false}>

              <WindowRow>
                <h4><strong></strong></h4>
                <p></p>
              </WindowRow>

              <WindowRow>
                <h4><strong>WindowRow</strong></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur distinctio id minus non officia perspiciatis ratione sit veniam vero. Architecto culpa ipsum, labore magnam minus quidem repudiandae temporibus tenetur.</p>
                <p>Lorem ipsum dolor sit amet, ut consectetur distincti consectus tenetur.</p>
              </WindowRow>

            </WindowColumn>



            <WindowColumn white>

              <WindowRow>
                <ToolbarHorizontal>
                  <ToolbarHorizontalItem type={'text'} label="General" active />
                  <ToolbarHorizontalItem type={'text'} label="Capabilities" />
                  <ToolbarHorizontalItem type={'text'} _label="Resources" />
                </ToolbarHorizontal>
              </WindowRow>

              <WindowRow>

                <WindowColumn>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur debitis eaque eum fugit impedit inventore iure rem sit, soluta. Accusamus adipisci eligendi facilis molestias nisi officiis quos sed? Adipisci!</p>
                </WindowColumn>

                <WindowColumn>
                  <WindowRow>a fucking row again</WindowRow>
                  <WindowRow>a fucking row again</WindowRow>
                  <WindowRow>
                    <WindowColumn>1</WindowColumn>
                    <WindowColumn>2</WindowColumn>
                    <WindowColumn>3</WindowColumn>
                    <WindowColumn>4</WindowColumn>
                    <WindowColumn>5</WindowColumn>
                    <WindowColumn>6</WindowColumn>
                  </WindowRow>
                  <WindowRow>a fucking row again</WindowRow>
                </WindowColumn>

                <WindowColumn>
                  <p><small>This is a very small font, but even tho... looks lovely.</small></p>
                </WindowColumn>

              </WindowRow>

              <WindowRow>
                <h1>this is the last row</h1>
              </WindowRow>

            </WindowColumn>

          </WindowColumnGroup>


          {/*<section>

            <h1>Heading 1 Lorem ipsum dolor sit amet, <strong>consectetur adipisicing</strong> elit. Aperiam atque culpa debitis dignissimos dolore dolores esse facilis harum ipsam ipsum iste magni officia praesentium quibusdam, recusandae, reprehenderit, voluptate voluptatem voluptatum.</h1>
            <h2>Heading 2, <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Ab at, consequuntur explicabo minima optio praesentium quibusdam ratione repellendus voluptatibus? Itaque optio provident voluptatem voluptatum. Maxime nobis officia praesentium quos vel!</h2>
            <h3>Heading 3, Lorem ipsum dolor sit <strong>amet, consectetur adipisicing elit. Aspernatur assumenda dignissimos</strong> velit voluptate. Aut autem blanditiis consequatur eligendi libero obcaecati pariatur similique veniam voluptatibus voluptatum. Ducimus minima possimus tenetur vero.</h3>
            <h4>Heading 4, Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Consectetur eos facere obcaecati quae quidem</strong> similique tenetur? Aspernatur iusto porro ratione. Aliquid, architecto autem fugit impedit minima quibusdam quis reiciendis sit!</h4>
            <h5>Heading 5, Lorem <strong>ipsum dolor sit amet, consectetur</strong> adipisicing elit. Aliquam deserunt dolorem doloribus earum eligendi eos hic inventore ipsam laboriosam neque, odio quidem ratione veritatis? Earum numquam quos repellendus tenetur vel.</h5>
            <h6>Heading 6, Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, commodi deleniti doloremque esse expedita illo laborum magni minus, molestiae nobis officia porro, <strong>repellendus suscipit ut voluptates!</strong> Aliquam architecto ex vel.</h6>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda atque cum deleniti dignissimos doloremque, error eum fuga itaque laborum nisi nulla placeat possimus quam rem sequi voluptates voluptatibus! Obcaecati? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto at beatae consequatur cum doloribus fuga illo illum magni molestias numquam, officia quam quisquam suscipit ut voluptatibus? Eaque, magnam.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur culpa deserunt dolore eaque enim eos expedita, molestias nulla placeat quae reiciendis saepe sed temporibus ut vero voluptatibus! Doloribus, odio.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur culpa deserunt dolore eaque enim eos expedita, molestias nulla placeat quae reiciendis saepe sed temporibus ut vero voluptatibus! Doloribus, odio.</p>

          </section>*/}

        </WindowContent>

        <footer className="toolbar toolbar-footer">
          <span className="title">&nbsp;</span>
        </footer>

      </Window>
    );
  }
}

export default App;
