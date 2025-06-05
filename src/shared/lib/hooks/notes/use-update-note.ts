import { updateNote } from '@/shared/api/notes'
import { Note, UpdateNoteRequest } from '@/shared/types'
import { useMutation } from '@tanstack/react-query'

export const useUpdateNote = () => {
  return useMutation<Note, Error, { id: string; data: UpdateNoteRequest }>({
    mutationFn: async ({ id, data }) => {
      return await updateNote(id, data)
    },
  })
}
