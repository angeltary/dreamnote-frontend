import { deleteNote } from '@/shared/api/notes'
import { Note } from '@/shared/types'
import { useMutation } from '@tanstack/react-query'

export const useDeleteNote = () => {
  return useMutation<Note, Error, string>({
    mutationFn: async (id: string) => {
      return await deleteNote(id)
    },
  })
}
