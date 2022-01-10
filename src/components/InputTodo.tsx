import React from 'react';

type Props = {
  inputText: string;
  changeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: () => void;
};

export const InputTodo: React.FC<Props> = (props: Props) => {
  const { inputText, changeInputText, addTodo } = props;

  return (
    <>
      <input
        type='text'
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputText(e)}
      />
      <button onClick={addTodo}>追加</button>
    </>
  );
};
