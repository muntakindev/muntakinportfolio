package portfolio;

public class PortfolioInfo {
    private String name = "Muntakin";
    private String title = "Full Stack Web Developer";
    private String location = "Chittagong, Bangladesh";
    private String email = "takinmun@gmail.com";
    private String phone = "01728995707";

    public static void main(String[] args) {
        PortfolioInfo profile = new PortfolioInfo();
        System.out.println("Name: " + profile.name);
        System.out.println("Title: " + profile.title);
        System.out.println("Location: " + profile.location);
        System.out.println("Email: " + profile.email);
        System.out.println("Phone: " + profile.phone);
    }
}
