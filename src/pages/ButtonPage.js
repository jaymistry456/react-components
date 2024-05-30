import Button from "../components/Button";

function ButtonPage() {
    return (
        <div>
            <div>
                <Button primary outline>Primary</Button>
            </div>
            <div>
                <Button secondary rounded outline>Secondary</Button>
            </div>
            <div>
                <Button success rounded>Success</Button>
            </div>
            <div>
                <Button warning outline>Warning</Button>
            </div>
            <div>
                <Button danger>Danger</Button>
            </div>
        </div>
    );
}

export default ButtonPage;