import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PullRequestDetailQuery from './pullRequestDetailsQuery'

type PullRequestsProps = {
    id: string;
}

export function getPRDetail(id: string): any {
    return <PullRequestDetailQuery id={id} />
}

function PullRequestDetails({ id }: PullRequestsProps) {

    function getPullRequestInfo() {
        toast.dismiss();
        toast(getPRDetail(id), {
            position: "top-center",
            className: "toast-custom-wrapper",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: id,
        });
    }

    const notify = () => getPullRequestInfo();

    return (
        <div>
            <button onClick={notify} id={id} className="button">Details</button>
        </div>
    );

}

export default PullRequestDetails;