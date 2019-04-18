import React from 'react';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';
import { wrap } from 'module';

let wrapped
beforeEach(() => {
    wrapped =  mount(<CommentBox />)
}
)

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
   
   expect(wrapped.find('textarea').length).toEqual(1);
   expect(wrapped.find('button').length).toEqual(1);

});

describe('the text area', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target:{
                value:'new input'
            }
        });
        wrapped.update();
    }
    )

    it('it has text area that users can type in', () => {
       
        expect(wrapped.find('textarea').prop('value')).toEqual('new input')
    })
    
    it('whwn form is submitted the text area is blank', () => {
        
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
    

})


