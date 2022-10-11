import { render } from '@testing-library/vue'
import Button from './Button.vue'

it('should render properly without any props', () => {
  const screen = render({
    components: { Button },
    template: `
      <Button>
        Hello
      </Button>
    `,
  })

  const button = screen.getByRole('button', { name: /Hello/i })
  expect(button).toBeInTheDocument()
  expect(button).toHaveClass('btn', 'btn--solid', 'btn--md', 'btn--primary')
  expect(button).toBeInTheDocument()
})
