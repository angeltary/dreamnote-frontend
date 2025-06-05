import { getNotes } from '@/shared/api/notes'
import { Note } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'

export const useGetNotes = () => {
  return useQuery<Note[], Error>({
    queryKey: ['notes'],
    queryFn: async () => {
      return await getNotes()
    },
  })
}
