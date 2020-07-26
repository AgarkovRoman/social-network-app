import React from 'react';
import { create, act } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='putin go away!' />);
        const root = component.root;
        expect(root.props.status).toBe('putin go away!');
    });

    test('span should be displayed after creation', () => {
        const component = create(<ProfileStatus status='putin go away!' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.length).not.toBeNull();
    });

    test('after creation of span should not be displayed input', () => {
        const component = create(<ProfileStatus status='putin go away!' />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });

    test('after creation span should contain correct status', () => {
        const component = create(<ProfileStatus status='putin go away!' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('putin go away!');;
    });

    test('input should be displayed in editMode instead of span ', () => {

        const component = create(<ProfileStatus status='putin go away!' />);
        const root = component.root;
        let span = root.findByType('span');

        act(() => {
            span.props.onDoubleClick();
        });

        let input = root.findByType('input');
        expect(input.props.value).toBe('putin go away!');;
    });

});