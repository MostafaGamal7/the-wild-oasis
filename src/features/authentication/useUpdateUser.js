import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Account has been updated successfully!");
      queryClient.invalidateQueries(["user"]);
    },
    onError: () => {
      toast.error("There was an error updating the account!");
    },
  });
  return { updateUser, isUpdating };
}
