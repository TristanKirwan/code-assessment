# Comments / things that stand out

- Grid is always 12 columns 
- For the first task, I just changed classNames, because its the easiest solution.
- For the second task, I moved the markup of the icons down, also removed some CSS that added element-spacing to the bottom of the item. I realize it's already handled by a `:last-child` selector in the _critical.css but I think for maintainability and readability sake it's better to also remove it from the component specific styling. I think if a new element was introduced underneath, it would need to be re-evaluated anyways with regards to how much whitespace there should be between items. I also made it so that the icons are aligned at the bottom with each other to make the visuals seem not as chaotic.
- Why is 1 of the USP items a link while the others arent? for now I'll just assume it was a mistake and remove the link element. The only reason I'm doing so is because I want to add flex and I would have to add flex to 2 different items.
- For the reviews section with regards to headings; I think there might need to be some change anyway; none of the texts on their own are a very good indicator of the section in the page structure. Similarly, the USP's could do with a (visually hidden) heading 2, and potentially the actual USP items could get a heading 3 (their title)
- Also no completely sure about the headings in the slider hero.
- For the touch target size, I've upped the size on mobile. The button is still touching the edge of the input field.I don't know if this is intentional design wise, so I left it (I checked the initial styling). Also, the + is falling out of the button, so I added some markup + styling to fix this.
