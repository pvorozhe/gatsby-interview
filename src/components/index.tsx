import { useState, useCallback } from 'react';
import PullRequestsTable from "./pullRequestsTable";
import { useForm } from 'react-hook-form';

interface SearchData {
  repo: string;
}
export default function PullRequests() {
  const [repo, setRepo] = useState<string>('')
  const { register, handleSubmit } = useForm<SearchData>();

  const onSubmit = useCallback((formValues: SearchData) => {
    setRepo(formValues.repo)
  }, []);

  function getTableComponent(): any {
    var regex = /([a-zA-Z0-9_-])+\/([a-zA-Z0-9_-])+$/;
    if (!regex.test(repo)) {
      return <p>Repo name must follow format string/string</p>;
    } else {
      return <PullRequestsTable repo={repo}/>
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="repo" type="string" ref={register} />
        <button className="button button--submit" type="submit">
          Search
        </button>
        {getTableComponent()}
      </form>
    </div>
  )
}