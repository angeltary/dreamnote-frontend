export interface Note {
  id: string
  title: string
  content: string
}

export interface CreateNoteRequest {
  title: string
  content: string
}

export type UpdateNoteRequest = Partial<CreateNoteRequest>
