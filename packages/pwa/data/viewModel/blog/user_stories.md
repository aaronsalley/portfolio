How-to: User Stories
Oh user stories—the bane of any PM's existence. These little bundles of joy need to be written in the common tongue accessible to the entire team: conscience enough so no one has to read a dissertation, but exhaustive enough so that all stakeholder know what the hell they're supposed to be working towards.

Recently, my team decided to tame the wild west of JIRA and implement user stories to facilitate cross-team cohesion (honestly, it was more to CYA, but let's pretend it was for more collaborative reasons).

A few weeks in and everyone's lost. The basic understanding of how a story should be structured seems to resonate, but few are seeming to get the why or what goes into a story. So it's good start with the standard issue types in Agile methodology.

Let's zoom out.

A collection of stories all working to achieve a thematic goal can be grouped under a unifying epic. If your team uses sprints (or even if it's more of a project-based atmosphere that's not time-bound), epics can be thought of as the body of the work that is on-going, or doesn't have a clear finish line.

User stories should describe the individual piece of business that's to be delivered to the described audience, but not the methods used to implement the story. Translation: stories help the business justify expense and focus on delivering things that the customer wants/needs. The stories should describe who is impacted, what is desired outcome, and why it affects them.

Anything that could be put into a checklist of To-Dos would typically be made into subtasks.

When combined with the technical story and assignments, the result is a clear roadmap as to who's going to do what's going to done how it's going to be done when it's done.

Here's a look at this in action.

Ensure proper tagging is implemented for analytics:
Measure task success by properly tagging of the start and completion of an RMA task

This isn't the most clear as to what actually needs to be done or why it's being done. The first step is to realize there are actually two issue types here: an epic, and a user story.

Breaking them apart, we now have the outlines of two issue types:

Ensure proper tagging is implemented for analytics:

This is an ongoing issue, aka an epic
Measure task success by properly tagging of the start and completion of an RMA task

This has a deliverable so let's transform this into a story.
This post isn't about focusing on epics, so we'll know file that away for another day. The next thing in sprucing up that newly identified user story is to take the implicit who, what, and why, and explicitly describe them. The best way to do that when you're starting out is to use a standard form. I like to use "As a ****\_\_\_\_****, I want to ******\_\_\_****** so that I can ****\_\_\_\_****." This madlib approach helps you think about each necessary component of a story in a structured, repeatable, and objective way.

We now have:

As the customer service department,
I want to measure task success by properly tagging the start and end of an RMA
so customers will be more satisfied with their shopping experience.

Closer, but we can make this better by removing the "how" and saving that for later.
This story is now looking better. It now explicitly states the who, the what, and the why. You'll probably notice that I've put each part of the madlib on to its own line. This is purely stylistic, but helps ensure that each part is done.

There's only one more way that I'd improve this example. Remember the summary definition of what a user story should be? Ideally, we'd not want to include the methods used to implement the story in the story itself. The "how" doesn't need to be addressed in the user story and is better to be saved for the technical description, or is explained in other specs in the delivery. "How" is very subjective since there's a million ways to skin a cat. Stories need to be objective and allow each team to bring their expertise. No need to get into the weeds on how for a user story.

As the customer service department,
I want to measure the task success of an RMA
so customers will be more satisfied with their shopping experience.

The pièce de résistance—a well-structured user story.
And there we have it, a completed user story! Writing user stories in this way makes it easier to user test qualitatively, run unit tests in QA, and ultimately for performance analytics in the wild.

Thanks for reading.

Still have questions? With over 15 years of the entire product lifecycle from design to development and deployment, I'd love to help you out either on a project or contract basis. All you have to do is get at me at hello@console.disruptv.llc.
