import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../Task';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom to use toBeInTheDocument

describe('boundary', () => {
    const task = {
        name: 'Task 1',
        description: 'This is the first task',
        completed: false
    };

    const completedTask = {
        name: 'Task 2',
        description: 'This is the second task',
        completed: true
    };

    test('TaskComponent boundary renders the task name', () => {
        render(<Task task={task} onDelete={() => { }} />);
        const taskName = screen.getByText('Task 1');
        expect(taskName).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the task description', () => {
        render(<Task task={task} onDelete={() => { }} />);
        const taskDescription = screen.getByText('This is the first task');
        expect(taskDescription).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the task status as incomplete', () => {
        render(<Task task={task} onDelete={() => { }} />);
        const statusElement = screen.getByText('Status: Incomplete');
        expect(statusElement).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the task status as completed', () => {
        render(<Task task={completedTask} onDelete={() => { }} />);
        const statusElement = screen.getByText('Status: Completed');
        expect(statusElement).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the delete button', () => {
        render(<Task task={task} onDelete={() => { }} />);
        const deleteButton = screen.getByText('Delete Task');
        expect(deleteButton).toBeInTheDocument();
    });

    test('TaskComponent boundary calls the onDelete function when the delete button is clicked', () => {
        const mockOnDelete = jest.fn();
        render(<Task task={task} onDelete={mockOnDelete} />);
        const deleteButton = screen.getByText('Delete Task');
        fireEvent.click(deleteButton);
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
    });
});
