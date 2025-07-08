# Comments / things that stand out

- Grid is always 12 columns 
- For the first task, I just changed classNames, because its the easiest solution.
- For the second task, I moved the markup of the icons down, also removed some CSS that added element-spacing to the bottom of the item. I realize it's already handled by a `:last-child` selector in the _critical.css but I think for maintainability and readability sake it's better to also remove it from the component specific styling. I think if a new element was introduced underneath, it would need to be re-evaluated anyways with regards to how much whitespace there should be between items.