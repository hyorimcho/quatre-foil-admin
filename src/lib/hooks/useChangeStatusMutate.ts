import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeSalesStatus } from "api";

const useChangeStatusMutate = () => {
  const queryClient = useQueryClient();
  const { mutate: changeStatusMutate } = useMutation(
    (id: string) => changeSalesStatus(id, true, false),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
  return { changeStatusMutate };
};

export default useChangeStatusMutate;
