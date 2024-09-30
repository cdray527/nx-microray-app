// Import necessary types and components
import type { Meta, StoryObj } from '@storybook/react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from '@design-system/components/molecules';

// Meta configuration for the Card component
const meta: Meta<typeof Card> = {
    title: 'Components/Molecules/Card',
    component: Card
};

// Export the meta object
export default meta;

// Define the type for the stories
type Story = StoryObj<typeof Card>;

// Default Card story
export const Default: Story = {
    render: () => (
        <Card>
            <CardHeader>
                <CardTitle>Default Card Title</CardTitle>
                <CardDescription>This is the description of the default card.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>This is the content of the default card.</p>
            </CardContent>
            <CardFooter>
                <p>Footer content goes here.</p>
            </CardFooter>
        </Card>
    )
};

// Custom ClassName Card story
export const CustomClassName: Story = {
    render: () => (
        <Card className="bg-blue-200">
            <CardHeader>
                <CardTitle className="text-blue-700">Custom Class Card Title</CardTitle>
                <CardDescription className="text-blue-600">
                    This is the description with custom styling.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>This is the content of the custom class card.</p>
            </CardContent>
            <CardFooter>
                <p>Footer content with custom styling.</p>
            </CardFooter>
        </Card>
    )
};

// Variants Card story
export const WithVariants: Story = {
    render: () => (
        <Card>
            <CardHeader>
                <CardTitle>Card with Variants</CardTitle>
                <CardDescription>Showcasing multiple variants of the card.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Content for the card with variants.</p>
            </CardContent>
            <CardFooter>
                <p>Footer for the variants card.</p>
            </CardFooter>
        </Card>
    )
};
