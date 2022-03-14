class TeamMemberView {
    printTeamMemberDetails(memberName, memberRoll) {
        console.log(`Team Member:\n  Name: ${memberName}\n  Roll: ${memberRoll}`);
    }
}
//MVC App
class MVCApp {
    render() {
        const model = new TeamMember("test123", "SM");
        const view = new TeamMemberView();
        const controller = new TeamMemberController(model, view);

        controller.updateView();
        controller.setMemberName("tet123");
        controller.setMemberRoll("Dev");
        controller.updateView();
    }
}

//Main
const app = new MVCApp();
app.render();