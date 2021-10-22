# Individual Assignment #6

## Author
Cody Mercadante

## Project Board
[Link to project board](https://github.com/wsu-cpts489-fa21/ia6-cody909/projects/1)

## Completed Tasks and Issues
Here are links to the issues associated with the tasks that I completed in this assignment:
|Task # | Issue |
|----------|-----------------------|
|1 | [Issue #1](https://github.com/wsu-cpts489-fa21/ia6-cody909/issues/1) |
|2 | [Issue #2](https://github.com/wsu-cpts489-fa21/ia6-cody909/issues/2) |
|3 | [Issue #3](https://github.com/wsu-cpts489-fa21/ia6-cody909/issues/3) |
|4 | [Issue #4](https://github.com/wsu-cpts489-fa21/ia6-cody909/issues/4) |
|5 | [Issue #5](https://github.com/wsu-cpts489-fa21/ia6-cody909/issues/5) |
|6 | [Issue #6](https://github.com/wsu-cpts489-fa21/ia6-cody909/issues/6) |


## Reflections
Since I use functional components, one thing I struggled with was mixing together class and functional components, to help with this I just went ahead and refactored some of the components I was working extensively with into functional components so I could make use of the hooks I was familiar with. Another difficult task was figuring out how to detect a click outside of the side menu area, in order to implement this I ended using a custom hook that passes in the toggle menu function and ref to the side menu, and anytime there is a click event not contained by the ref it calls the toggle menu function. I think creating the side menu functionality was the most fun part of the project because it was the first time I've extensively used the useRef() hook so I learned a lot working on that functionality.

## Notes
Github pages is just showing the readme file for some reason so I included gifs demonstrating the tasks. I also included tests.