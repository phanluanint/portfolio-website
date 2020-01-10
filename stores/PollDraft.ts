import {types, getParent, Instance, cast, destroy} from "mobx-state-tree"
import {PollChoiceBase, PollBase} from './PollBase'
import shortid from 'shortid'

// Instance is a typescript helper that extracts the type of the model instance
type PollDraftChoiceModel = Instance<typeof PollDraftChoice>
type PollDraftModel = Instance<typeof PollDraft>

export const PollDraftChoice = PollChoiceBase.actions(self => ({
    setChoice(choice: string) {
        self.value = choice
    },
    remove() {
        const pollDraftParent = getParent<PollDraftModel>(self, 2)
        pollDraftParent.removeChoice(cast(self))
    }
}))

export const PollDraft = types
    .compose(PollBase,
        types.model({
            choices: types.optional(types.array(PollDraftChoice), [])
        })
    )
    .actions(self => ({
        setQuestion(question: string) {
            self.question = question
        },
        addChoice(choice: string) {
            self.choices.push({ id: shortid(), value: choice })
        },
        removeChoice(choiceToRemove: PollDraftChoiceModel) {
            destroy(choiceToRemove)
        }
    }))