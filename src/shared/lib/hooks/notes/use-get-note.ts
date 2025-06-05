import { getNote } from '@/shared/api/notes'
import { Note } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'

export const useGetNote = (id: string) => {
  return useQuery<Note, Error>({
    queryKey: ['note', id],
    queryFn: async () => {
      return await getNote(id)
    },
  })
}
