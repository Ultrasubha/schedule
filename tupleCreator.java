import java.util.Scanner;

class tupleCreator {
    public static void main(String[] a) {
        // "Date @ Time @ Task @ Duration @ Venue",
        // "Date @ Time @ Task @ Duration @ <a href=\"\"> Name </a>",
        String s = "";
        Scanner sc = new Scanner(System.in);
        System.out.println("Hi, I am Sub0d33p \\(^-^)/\nPleased to meet you.\nHow many event do you want to log?");
        int N = sc.nextInt();
        sc.nextLine();
        while (N-- > 0) {
            System.out.println("Date of the event?");
            s += sc.nextLine() + "@";
            System.out.println("Time of the event?");
            s += sc.nextLine() + "@";
            System.out.println("Event Topic?");
            s += sc.nextLine() + "@";
            System.out.println("Duration of the event?");
            s += sc.nextLine() + "@";
            System.out.println("Please enter event link or Venue");
            String temporary = sc.nextLine();
            if (temporary.contains("www.")) {
                int beginIndex = temporary.lastIndexOf(".");
                int endIndex = temporary.lastIndexOf(".", beginIndex - 1);
                s += "<a href=\"" + temporary + "\">" + temporary.substring(endIndex + 1, beginIndex) + "</a>";
            } else
                s += temporary;
            System.out.println("Is it related to LPU? (Y/N)");
            switch (sc.nextLine()) {
                case "Y":
                    s += "@LPU\n";
                    break;
                case "N":
                    s += "\n";
                    break;
                default:
                    s += "\n";
                    break;
            }
            if (N > 0)
                System.out.println("\nEvent Details Noted successfully\nPlease Enter the details of next event ^-^");
        }
        System.out.println("Here's your Output. Remember to give it to me ^-^\n" + s);
        sc.close();
    }
}