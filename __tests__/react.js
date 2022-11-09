import '@testing-library/react';
import React from 'React';
import {render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/app.jsx';
import ActivityCard from '../src/components/ActivityCard';
import CreateMemberButtons from '../src/components/CreateMemberButtons';
import HomeButton from '../src/components/HomeButton';
import LoginButtons from '../src/components/LoginButtons';
import NewMemberEntry from '../src/components/NewMemberEntry';
import RegisterButtons from '../src/components/RegisterButtons';
import TeamCard from '../src/components/TeamCard';
import TotalActivityDisplay from '../src/components/TotalActivityDisplay';
import TotalTeamDisplay from '../src/components/TotalTeamDisplay';

import LoginPage from '../src/containers/LoginPage.jsx'
import TeamInfo from '../src/containers/TeamInfo.jsx'
import Home from '../src/containers/Home.jsx'
import ActivityInfo from '../src/containers/ActivityInfo.jsx'
import CreateTeam from '../src/containers/CreateTeam.jsx'


describe('Testing react components', () => {
    describe('Create Team Component', () => {
        describe('Create member buttons', () =>{
            
            let text;
            const props = {
                memberLength: 33,
                memberEntries: [1,2,3],
                deleteMember: jest.fn(),
                addMember: jest.fn(),
                setMemberLength: jest.fn(),
            }
            beforeEach(() => {
                //might need to render create team here
                text = render(<CreateMemberButtons {...props}/>)
            })
            
            test('Button is rendered on screen', () =>{
                const buttons = text.getAllByRole('button');
                expect(buttons.length).toEqual(2);
            });
            

            test('functions passed down invoked on click', () => {
                const buttons = text.getAllByRole('button');
                fireEvent.click(buttons[0]);
                fireEvent.click(buttons[1]);
                expect(props.setMemberLength).toHaveBeenCalled();
                expect(props.deleteMember).toHaveBeenCalled();
                expect(props.addMember).toHaveBeenCalled();
            });
        })
        // test delete member
            //test if button is rendered on screen
            //expect button to have been clicked
        // test add member
        // test cancel
        // test create
    })
})


// test('change values via the fireEvent.change method', () => {
//     const handleChange = jest.fn()
//     const {container} = render(<input type="text" onChange={handleChange} />)
//     const input = container.firstChild
//     fireEvent.change(input, {target: {value: 'a'}})
//     expect(handleChange).toHaveBeenCalledTimes(1)
//     expect(input.value).toBe('a')
//   })


//   // 3
//   test('functions passed down invoked on click', () => {
//     const buttons = screen.getAllByRole('button');
//     fireEvent.click(buttons[0]);
//     fireEvent.click(buttons[1]);
//     expect(props.addCard).toHaveBeenCalled();
//     expect(props.deleteCard).toHaveBeenCalled();
//   });

// End of testing react components


/*
    describe(testing react components)
*/

/*
    describe(testing react router)
*/

/*
    describe(testing react context)
*/

/*
    describe(login)
*/

/*
    describe(it adds activities)
*/



//was in package.json
    // "jest": {
    //     "globalSetup": "./jest-setup.js",
    //     "globalTeardown": "./jest-teardown.js",
    //     "testEnvironment": "jest-environment-jsdom",
    //     "setupFilesAfterEnv": [
    //       "@testing-library/jest-dom/extend-expect"
    //     ]
    //   },