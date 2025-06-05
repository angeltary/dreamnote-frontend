import { createNote } from '@/shared/api/notes'
import { CreateNoteRequest, Note } from '@/shared/types'
import { useMutation } from '@tanstack/react-query'

export const useCreateNote = () => {
  return useMutation<Note, Error, CreateNoteRequest>({
    mutationFn: async (data: CreateNoteRequest) => {
      return await createNote(data)
    },
  })
}
