# React Guidelines

## Component Structure

- Use functional components with hooks instead of class components
- Keep components small and focused on a single responsibility
- Extract reusable logic into custom hooks
- Use React.memo for performance optimization when appropriate

## Props

- Use prop destructuring in function parameters
- Define PropTypes or TypeScript interfaces for all components
- Provide default props when applicable
- Avoid passing too many props to a component (consider composition)

## State Management

- Use useState for local component state
- Use useReducer for complex state logic
- Consider context API for state that needs to be accessed by many components
- Only use external state management libraries (Redux, Zustand) when necessary

## Side Effects

- Use useEffect for side effects
- Clean up side effects when component unmounts
- Specify dependencies array correctly to avoid infinite loops
- Split effects by concern rather than combining unrelated effects

## Rendering

- Avoid expensive calculations in render
- Use useMemo to memoize expensive calculations
- Use useCallback for functions passed as props to child components
- Implement proper key props in lists

## Styling

- Prefer CSS modules or styled-components over inline styles
- Keep styles close to the components they apply to
- Use theme variables for consistent styling
- Consider responsive design from the start

## Performance

- Use React DevTools Profiler to identify performance issues
- Implement code splitting with React.lazy and Suspense
- Virtualize long lists with react-window or similar libraries
- Avoid unnecessary re-renders