import styled from 'styled-components';

export const ContainerStyled = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 200px calc(100% - 200px);
    
    .login {
        display: grid;
        height: 100%;

        justify-content: center;

        z-index: 2;
        background-color: rgb(63, 81, 181);

        .fields {
            display: grid;
            grid-template-columns: 250px 250px 100px;
            grid-column-gap: 10px;

            align-items: center;
            justify-content: center;
            padding: 10px;
            margin: 10px;
            /* background: #ffffff; */

            /* -moz-box-shadow: 11px 10px 5px -8px rgba(0,0,0,0.42);
            box-shadow: 11px 10px 5px -8px rgba(0,0,0,0.42); */

            .field {
                display: grid;
                grid-template-rows: 20px 40px;

                strong {
                    color: #ffffff;
                    font-size: 16px;
                }

                input {
                    height: 30px;
                }
            }
        }

        .text {
            display: grid;
            justify-content: center;
            align-items: center;
            color: #ffffff;
                    
            strong {
                font: 16px "Comic Sans MS", cursive;
                font-style : italic;
                font-size: 20pt;
                font-weight: 20pt;
            }
        }
    }

    
    .content {
        /* background-color: rgba(0, 0, 0, 0.05); */
        display: grid;
        /* grid-template-columns: 30% 70%; */
        z-index: 3;
        justify-content: center;
        /* background-color: #ffffff; */
    }
    
`;