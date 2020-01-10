import { types, Instance } from 'mobx-state-tree'
import { PollBase } from "./PollBase";
import { PollDraft } from "./PollDraft";

type PublishedPollModel = Instance<typeof PublishedPoll>
type PollDraftModel = Instance<typeof PollDraft>

const PublishedPoll = types.compose(
    PollBase,
    types.model({
        id: types.identifier
    })
)