import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { Modal, ModalBody, ModalHeader, ModalActions, ModalLinks } from '..';
import Button from '../../Button';
import { TextArea, TextField } from '../../Form';
import { EmbedIcon, LinkIcon } from '../../../icons';

describe('Modal render tests', () => {
  beforeEach(() => {
    // This surpresses React error boundary logs for testing intentionally
    // thrown errors, like in some test cases in this suite.
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("throw an error if a Modal component doesn't have a focusable element", () => {
    expect(() =>
      render(<Modal title="My modal">Modal content</Modal>)
    ).toThrowErrorMatchingInlineSnapshot(
      `"Your focus-trap must have at least one container with at least one tabbable node in it at all times"`
    );
  });

  test('render a Modal component with default values', () => {
    render(
      <Modal title="My modal">
        <a href="test">Modal content</a>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('render a Modal component with just a ModalBody', () => {
    render(
      <Modal title="My modal">
        <ModalBody>
          <a href="test">Modal content</a>
        </ModalBody>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
  });

  test('render a Modal component with a ModalHeader and a ModalBody', () => {
    render(
      <Modal title="My modal">
        <ModalHeader />
        <ModalBody>
          <a href="test">Modal content</a>
        </ModalBody>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  test('render a Modal component with a custom title in the ModalHeader and a ModalBody', () => {
    render(
      <Modal title="My modal">
        <ModalHeader title="Custom modal title" />
        <ModalBody>
          <a href="test">Modal content</a>
        </ModalBody>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    expect(screen.getByText('Custom modal title')).toBeInTheDocument();
  });

  test('render a Modal component with a ModalHeader, a ModalBody and ModalActions', () => {
    render(
      <Modal title="My modal">
        <ModalHeader title="Custom modal title" />
        <ModalBody>
          <a href="test">Modal content</a>
        </ModalBody>
        <ModalActions>
          <Button>Click me</Button>
        </ModalActions>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('render a Modal component with a ModalHeader, a ModalBody and ModalLinks', () => {
    render(
      <Modal title="My modal">
        <ModalHeader title="Custom modal title" />
        <ModalBody>
          <a href="test">Modal content</a>
        </ModalBody>
        <ModalLinks>
          <Button appearance="ghost">Click me</Button>
        </ModalLinks>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('render a Modal component with a ModalHeader, a ModalBody, ModalActions and ModalLinks', () => {
    render(
      <Modal title="My modal">
        <ModalHeader title="Custom modal title" />
        <ModalBody>
          <a href="test">Modal content</a>
        </ModalBody>
        <ModalLinks>
          <Button appearance="ghost">Link button</Button>
        </ModalLinks>
        <ModalActions>
          <Button type="submit">Action button</Button>
        </ModalActions>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    expect(screen.getByText('Link button')).toBeInTheDocument();
    expect(screen.getByText('Action button')).toBeInTheDocument();
    expect(screen.getByText('Link button')).toHaveAttribute('type', 'button');
    expect(screen.getByText('Action button')).toHaveAttribute('type', 'submit');
  });

  test('render a closed Modal component', () => {
    render(
      <Modal title="My modal" open={false}>
        <a href="test">Modal content</a>
      </Modal>
    );
    expect(screen.queryByLabelText('My modal')).not.toBeInTheDocument();
  });

  test('render a Modal component that is an alertdialog', () => {
    render(
      <Modal title="My modal" priority="assertive">
        <a href="test">Modal content</a>
      </Modal>
    );
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
  });
});

describe('Modal events', () => {
  test('render a Modal component and close it by clicking on the outside container', () => {
    render(
      <Modal title="My modal">
        <ModalHeader />
        <ModalBody>
          <a href="test">Modal content</a>
        </ModalBody>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    userEvent.click(document.body);
    expect(screen.queryByLabelText('My modal')).not.toBeInTheDocument();
  });

  test('render a Modal component and close it by pressing the Escape key', () => {
    render(
      <Modal title="My modal">
        <ModalHeader />
        <ModalBody>
          <a href="test">Modal content</a>
        </ModalBody>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    fireEvent.keyUp(document.body, { key: 'Enter' });
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    fireEvent.keyUp(document.body, { key: 'Escape' });
    expect(screen.queryByLabelText('My modal')).not.toBeInTheDocument();
  });

  test('render a Modal component and ignore the Escape key when closeOnEscape is false', () => {
    render(
      <Modal title="My modal" closeOnEscape={false}>
        <ModalHeader />
        <ModalBody>
          <a href="test">Modal content</a>
        </ModalBody>
      </Modal>
    );
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
    fireEvent.keyUp(document.body, { key: 'Escape' });
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
  });

  test("render a Modal component and don't close it when the user is typing in a form field", () => {
    render(
      <Modal title="My modal">
        <ModalHeader />
        <ModalBody>
          <TextField label="Enter text" value="" />
        </ModalBody>
      </Modal>
    );
    screen.getByLabelText('Enter text').focus();
    fireEvent.keyUp(document.body, { key: 'Escape' });
    expect(screen.getByLabelText('My modal')).toBeInTheDocument();
  });

  test('render a Modal component and trap the focus in it', async () => {
    render(
      <Modal title="My modal">
        <ModalHeader />
        <ModalBody>
          <TextField label="Enter text" value="" />
        </ModalBody>
        <ModalActions>
          <Button>Click me</Button>
        </ModalActions>
      </Modal>
    );

    await waitFor(() => {
      // The Close icon in the header should have focus
      expect(screen.getByLabelText('Close')).toHaveFocus();
    });

    // We press TAB once
    userEvent.tab();
    // We expect the TextField to have focus
    expect(screen.getByLabelText('Enter text')).toHaveFocus();

    // We press TAB again
    userEvent.tab();
    // We expect the Button to have focus
    expect(screen.getByText('Click me')).toHaveFocus();

    // We press TAB yet again
    userEvent.tab();
    // We expect to move the focus back to the Close icon in the header
    expect(screen.getByLabelText('Close')).toHaveFocus();
  });
});

describe('Modal accessibility', () => {
  test('There should be no violations with a plain modal', async () => {
    const { container } = render(
      <Modal title="My modal">
        <a href="test">Modal content</a>
      </Modal>
    );
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });

  test('There should be violations with a modal when it is not labeled', async () => {
    const { container } = render(
      // @ts-expect-error missing title
      <Modal>
        <a href="test">Modal content</a>
      </Modal>
    );
    const html = await axe(container);
    expect(html).not.toHaveNoViolations();
  });

  test('There should be no violations with a full modal', async () => {
    const { container } = render(
      <Modal title="Edit datastream?">
        <ModalHeader />
        <ModalBody>
          <TextField label="Datastream title" value="Google Ads report" />
          <TextArea
            label="Description"
            value=""
            placeholder="Enter your message here"
          />
        </ModalBody>
        <ModalLinks>
          <Button size="sm" appearance="ghost">
            <LinkIcon width="2em" />
            Copy link
          </Button>
          <Button size="sm" appearance="ghost">
            <EmbedIcon width="2em" />
            Get embed code
          </Button>
        </ModalLinks>
        <ModalActions>
          <Button action="confirmation">Apply</Button>
          <Button appearance="outline" action="confirmation">
            Cancel
          </Button>
        </ModalActions>
      </Modal>
    );
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });
});
